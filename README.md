# InventarioFront

Este proyecto fue generado con  [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

## Requisitos

Antes de comenzar asegurate de tener instalado lo siguiente:
- [node.js] (https://nodejs.org/es/download)

## Configuración

1. Instalar docker:
   https://www.docker.com/products/docker-desktop/

3. Clonar el repositorio:
   ```bash
   git clone https://github.com/warriorblood117/inventario-front.git
   cd iventario-front

5. correr el contendor ubicado en dockerfile:
   ```bash
   docker build -t inventario-front:1 .
   docker container run -dp 4200:4200 inventario-front:1 
