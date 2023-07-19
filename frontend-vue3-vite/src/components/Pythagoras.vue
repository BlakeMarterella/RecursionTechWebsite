<template>
    <div class="flex w-full justify-center">
      <canvas id="pythagoras_canvas" width="800" height="500" @mousemove="handleMouseMove"></canvas>
    </div>
  </template>
    
  <script lang="ts">
  import { defineComponent, onMounted } from "vue";
  
  export default defineComponent({
    name: "PythagorasFractal",
    setup() {
      let vueCanvas: CanvasRenderingContext2D;
      let base_dim: number;
      let ratio: number;
      let max_order: number;
      let min_order: number;
      let order_colors: string[] = ['#324142', '#435758', '#648284', '#75989a', '#86aeb0', '#97c4c6', '#a8d9dc', '#b9eff2', '#caffff'];
      let desired_order: number;
      let scales: number[];
  
      // Asymetrical Values
      let max_percentage: number = 0.8;
      let l_percentage = 0.5;
      let r_percentage = 0.5;
  
      let rx_trans: number[];
      let ry_trans: number[];
      
      let final_langle: number;
      let final_lwidth: number;
      let final_lheight: number;
      let lwidths: number[];
      let langle: number;
      let lscale: number;
  
      let final_rangle: number;
      let final_rwidth: number;
      let final_rheight: number;
      let rwidths: number[];
      let rangle: number;
      let rscale: number;
  
      let final_height: number;
  
      /**
       * Call this function when the element is loaded in
       */
      onMounted(() => {
        // Grab Canvas
        var canvas = <HTMLCanvasElement>document.getElementById("pythagoras_canvas");
        var ctx = canvas.getContext("2d");
        if (ctx == null) // if canvas is not supported
          return;
  
        // Canvas Settings
        vueCanvas = ctx;
        vueCanvas.strokeStyle = '#000000';
        vueCanvas.fillStyle = '#000000';
        vueCanvas.lineCap = 'round';
  
        // Set Base Dimensions and Ratio
        base_dim = Math.min(vueCanvas.canvas.width / 6, vueCanvas.canvas.height / 4);
        ratio = 0.5 * Math.sqrt(2);
  
        // Set Order Values
        max_order = 9;
        min_order = 0;
        desired_order = 7;
  
        // Initialize the different scales
        scales = [];
        for (let i = min_order; i <= max_order; i++) {
          scales[i] = Math.pow(ratio, i);
        }
  
        // Initialize the canvas
        calcVariables();

        draw();
      });
  
      /**
       * Calculates all of the variables needed to draw the fractal.
       */
      const calcVariables: any = () => {
  
        var whole = Math.floor(desired_order),
          frac = desired_order - whole,
          lx = l_percentage * base_dim,
          rx = r_percentage * base_dim,
          temp = 0, i;
  
        // calculate the final height first.
        let height = base_dim * (Math.min(r_percentage, l_percentage));
  
        //calulate all the base variables.
  
        //now calculate the angles for either side.
        langle = Math.atan(height / lx);
        rangle = Math.atan(height / rx);
  
        //calculate the lengths of each side.
        temp = height * height;
        let lwidth = Math.sqrt((lx * lx) + (temp));
        let rwidth = Math.sqrt((rx * rx) + (temp));
  
        //calculate the scales for each side.
        temp = base_dim * ratio;
        rscale = rwidth / (temp);
        lscale = lwidth / (temp);
  
        //now calculate all of the inbetween values (base up to desired order);
        lwidths = [lwidth];
        rwidths = [rwidth];
        rx_trans = [base_dim * l_percentage];
        ry_trans = [-height];
        for (i = 1; i <= max_order + 1; i++) {
          temp = scales[i - 1];
          lwidths[i] = lwidth * temp;
          rwidths[i] = rwidth * temp;
          rx_trans[i] = lx * temp;
          ry_trans[i] = -height * temp;
        }
  
        // calculate the angles and lengths on the last partial iteration.
        final_height = height * frac * scales[whole];
  
        temp = lx * scales[whole];
        final_langle = Math.atan(final_height / temp);
        final_lwidth = Math.sqrt((temp * temp) + (final_height * final_height));
        final_lheight = final_lwidth * frac;
  
        temp = rx * scales[whole];
        final_rangle = Math.atan(final_height / temp);
        final_rwidth = Math.sqrt((temp * temp) + (final_height * final_height));
        final_rheight = final_rwidth * frac;
      };
  
      /**
       * Draws the pythagoras tree.
       */
      const draw: any = () => {
        vueCanvas.save();
        
        vueCanvas.translate((vueCanvas.canvas.width / 2 ) - (base_dim / 2), vueCanvas.canvas.height);
        
        // Draw the trunk of the tree
        vueCanvas.fillStyle = order_colors[0];
        drawBranch(base_dim, base_dim);
        vueCanvas.save();
  
        // Draw the branches
        vueCanvas.translate(0, -base_dim);
        drawBranches(1);
        vueCanvas.restore();
  
        vueCanvas.restore();
      };
  
      /**
       * Draw a singular branch of the tree.
       * 
       * @param width the width of the box
       * @param height the height of the box
       */
      const drawBranch: any = (width: number, height: number) => {
        vueCanvas.fillRect(0, -height, width, height);
      };
  
      /**
       * Draw all of the branches on the tree for a layer
       * 
       * @param current_order The current layer of the tree to draw
       */
      const drawBranches: any = (current_order: number) => {
        var next_order = current_order + 1;
  
        // Set the color of the current layer
        vueCanvas.fillStyle = order_colors[current_order];
  
        // Draw the left branch
        vueCanvas.save();
        if (current_order > desired_order) {
          // Draw the special end
          vueCanvas.rotate(-final_langle);
          drawBranch(final_lwidth, final_lheight)
        }
        else {
          vueCanvas.rotate(-langle);
          drawBranch(lwidths[current_order], lwidths[current_order]);
          vueCanvas.save();
          vueCanvas.translate(0, -lwidths[current_order]);
          vueCanvas.scale(lscale, lscale);
          drawBranches(next_order);
          vueCanvas.restore();
        }
        vueCanvas.restore();
        
        // Draw the right branch
        vueCanvas.save();
        if (current_order > desired_order) {
          // Draw the special end
          vueCanvas.translate(rx_trans[current_order], -final_height);
         
          vueCanvas.rotate(final_rangle);
          drawBranch(final_rwidth, final_rheight)
        }
        else {
          vueCanvas.translate(rx_trans[current_order], ry_trans[current_order]);
          vueCanvas.rotate(rangle);
          drawBranch(rwidths[current_order], rwidths[current_order]);
  
          // Draw next branch
          vueCanvas.save();
          vueCanvas.translate(0, -rwidths[current_order]);
          vueCanvas.scale(rscale, rscale);
          drawBranches(next_order);
          vueCanvas.restore();
        }
        vueCanvas.restore();
      };
  
      /**
       * Change the number of iterations to draw based on the mouse's y position
       * 
       * @param pos_y the mouse's position on the y axis
       */
      const updateOrder: any = (pos_y: number) => {
        var min_y = vueCanvas.canvas.height * 0.2
        var max_y = vueCanvas.canvas.height - (2 * min_y);
        var y = Math.min(max_y,  Math.max(0, -(pos_y - (vueCanvas.canvas.height - min_y))));
        
        desired_order = max_order * (y / max_y);
      };
  
      /**
       * Change the direction the tree us leaning based on the mouse's x position 
       * 
       * @param pos_x the mouse's position on the x axis
       */
      const updateHorizontalPos: any = (pos_x: number) => {
        var x = Math.min(1,Math.abs(pos_x - (vueCanvas.canvas.width / 2))/((vueCanvas.canvas.width / 2) - (vueCanvas.canvas.width * 0.2)));
        x = ((max_percentage - 0.5) * x) + 0.5;
  
        if (pos_x < (vueCanvas.canvas.width / 2)) {
          // We are on the right side 
          l_percentage = 1 - x;
          r_percentage = x;
        }
        else {
          // We are on the left side
          l_percentage = x;
          r_percentage = 1 - x;
        }
      };
  
      /**
       * Update the canvas based on the mouse position
       */
      const update: any = (pos_x: number, pos_y: number) => {
        vueCanvas.clearRect(0, 0, vueCanvas.canvas.width, vueCanvas.canvas.height);
        updateHorizontalPos(pos_x);
        updateOrder(pos_y);
        calcVariables();
        draw();
      }
  
      const handleMouseMove = (e: MouseEvent) => {
        // update the canvas based on the mouse position
        update(e.x, e.y);
      };
  
      return {
        handleMouseMove,
      };
    },
  });
  </script>
    
  <style scoped>
  /* Your styles here */
  </style>
    