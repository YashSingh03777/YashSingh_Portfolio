import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})      //  These code is  for the jsx extension 

// // while i am using js extension then use these: 
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react({
//       jsxRuntime: 'automatic',
//       // 👇 include .js files so JSX works inside them
//       include: "**/*.js",
//     }),
//   ],
// })

