<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">
  <strong>Personal Finance Tracker API</strong><br>
  Una API hecha con <a href="http://nodejs.org" target="_blank">Node.js</a> y <a href="https://nestjs.com/" target="_blank">NestJS</a> para registrar y gestionar gastos e ingresos personales.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/package/@nestjs/common" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
</p>

## Descripción

Esta API llamada **Personal Finance Tracker** es un CRUD de finanzas personales desarrollado con NestJS.

CRUD significa: **Crear, Leer, Actualizar y Eliminar**.

Esta API permite:

### Módulo de Gastos

- Registrar gastos con los campos: título (ej. "Cine", "Mercado"), monto (amount), fecha
- Endpoint para crear gasto: `POST /expenses`
- Consultar todos los gastos: `GET /expenses`
- Consultar un gasto específico: `GET /expenses/:id`

### Módulo de Ingresos

- CRUD completo para registrar, consultar, editar y eliminar ingresos

### Módulo Dashboard

Calcula métricas importantes como:

- Total de ingresos
- Total de gastos
- Balance del mes
- Neto total
- Cantidad de operaciones

## Esta API es el backend de una aplicación de finanzas personales que permite gestionar de manera sencilla los ingresos y gastos de un usuario.
