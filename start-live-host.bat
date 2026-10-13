@echo off
title The Consistent Academy - Live Host Server
cd /d "%~dp0"
echo ===================================================
echo Starting The Consistent Academy Live Dev Host...
echo Live auto-reloading is ACTIVE (changes update on spot).
echo ===================================================
start http://localhost:5173/
npm run dev
pause
