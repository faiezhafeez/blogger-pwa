import { defineConfig } from './src/types';

export default defineConfig({
  origin: "https://taleemwaly.blogspot.com",
  name: "Taleemwaly",
  short_name: "Taleemwaly",
  description: "Matric to Master notes, past papers, guess papers, and results for all Pakistani boards",
  theme_color: "#482dff",
  background_color: "#ffffff",
  display: "standalone",
  orientation: "portrait",
  start_url: "/",
  scope: "/",
});
