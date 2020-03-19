cd ..
set project_name=lager-store-pwa
REM set excluded_project=sc.colfina.pwa
echo off
REM echo %excluded_project%/**/*> .dockerignore
REM echo %excluded_project%>> .dockerignore
echo %project_name%/node_modules/**/*>> .dockerignore
echo %project_name%/node_modules>> .dockerignore
echo %project_name%/dist/**/*>> .dockerignore
echo %project_name%/dist>> .dockerignore
REM echo sc.pwa.base/node_modules/**/*>> .dockerignore
REM echo sc.pwa.base/node_modules>> .dockerignore
echo on
docker build --file %project_name%/Dockerfile .
del .dockerignore
cd %project_name%