@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo               ZapTech GitHub Push Utility
echo ========================================================
echo.

set "commit_msg=%~1"

if "%commit_msg%"=="" (
    set /p "commit_msg=Masukkan pesan commit (tekan Enter untuk default 'Update project'): "
)

if "%commit_msg%"=="" (
    set "commit_msg=Update project"
)

echo.
echo [1/3] Menambahkan file yang diubah (git add .)...
git add .

echo [2/3] Membuat commit dengan pesan: "%commit_msg%"...
git commit -m "%commit_msg%"

echo [3/3] Mengirim perubahan ke GitHub (git push origin main)...
git push origin main

echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo         BERHASIL: Semua perubahan ter-push ke GitHub!
    echo ========================================================
) else (
    echo ========================================================
    echo         GAGAL: Terjadi kendala saat push.
    echo ========================================================
)

echo.
pause
