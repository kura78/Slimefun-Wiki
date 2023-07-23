#!/bin/bash

echo "[Slimefun Handbook] Ensuring all dependencies met"
sudo npm i
echo "[Slimefun Handbook] Pulling latest commit from orchidtowny/slimefun-handbook"
git pull https://github.com/orchidtowny/slimefun-handbook
echo "[Slimefun Handbook] Building handbook"
sudo npm run build
echo "[Slimefun Handbook] Launching handbook in production mode"
npm run preview