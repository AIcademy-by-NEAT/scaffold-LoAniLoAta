@echo off
REM Team Vibe Checker - Quick Start Script

echo.
echo ========================================
echo  Team Vibe Checker - Installation & Run
echo ========================================
echo.

REM Check if node is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Node.js not found!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [OK] Node.js found: %NODE_VERSION%
echo.

REM Clean old installations
echo Cleaning old installations...
if exist node_modules rmdir /s /q node_modules
if exist frontend\node_modules rmdir /s /q frontend\node_modules
if exist backend\node_modules rmdir /s /q backend\node_modules
if exist package-lock.json del package-lock.json
if exist frontend\package-lock.json del frontend\package-lock.json
if exist backend\package-lock.json del backend\package-lock.json

echo.
echo Installing dependencies... (this may take a few minutes)
echo.

REM Install root dependencies
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install root dependencies
    pause
    exit /b 1
)

REM Install frontend dependencies
echo.
echo Installing frontend dependencies...
cd frontend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install frontend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..

REM Install backend dependencies
echo.
echo Installing backend dependencies...
cd backend
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Failed to install backend dependencies
    cd ..
    pause
    exit /b 1
)
cd ..

echo.
echo ========================================
echo  ✅ Installation Complete!
echo ========================================
echo.
echo Starting servers...
echo.
echo Frontend will be available at: http://localhost:3000
echo Backend will be available at: http://localhost:3001
echo.
echo Press Ctrl+C to stop the servers
echo.

REM Run npm dev
call npm run dev

pause
