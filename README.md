# 🛍️ Prueba Técnica UTP - Tienda Online

Aplicación de comercio electrónico desarrollada con React, TypeScript y Tailwind CSS para la prueba técnica de UTP.

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38bdf8?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646cff?logo=vite)

## 📋 Descripción

Tienda online simple que permite a los usuarios:
- ✅ Ver un catálogo de productos con información detallada
- ✅ Agregar productos al carrito (máximo 1 unidad por producto)
- ✅ Ver detalles completos de cada producto
- ✅ Gestionar el carrito de compras (agregar, eliminar, vaciar)
- ✅ Ver el total de la compra en tiempo real

## 🚀 Demo en Vivo

**Repositorio**: [github.com/josesuarez20/prueba-tecnica-utp](https://github.com/josesuarez20/prueba-tecnica-utp)

## 🛠️ Tecnologías Utilizadas

### Core
- **React** 19.2.0 - Librería de UI
- **TypeScript** 5.9.3 - Tipado estático
- **Vite** 7.2.4 - Build tool y dev server

### Estilos
- **Tailwind CSS** 4.1.17 - Framework de utilidades CSS
- **@tailwindcss/vite** 4.1.17 - Plugin de Vite para Tailwind

### Testing
- **Vitest** 4.0.13 - Framework de testing
- **@testing-library/react** 16.3.0 - Utilidades de testing
- **@testing-library/jest-dom** 6.9.1 - Matchers de DOM
- **jsdom** 27.2.0 - Entorno DOM para tests

### Herramientas
- **ESLint** 9.39.1 - Linter
- **TypeScript ESLint** 8.46.4 - Reglas de ESLint para TS

## 📁 Arquitectura del Proyecto

```
src/
├── app/                          # Configuración de la aplicación
│   ├── App.tsx                   # Componente raíz
│   └── providers/
│       └── AppProvider.tsx       # Providers globales
├── features/                     # Features por dominio (Clean Architecture)
│   ├── cart/
│   │   ├── components/           # Componentes del carrito
│   │   ├── context/              # Context API + Reducer
│   │   ├── hooks/                # Custom hooks
│   │   ├── types/                # TypeScript types
│   │   └── use-cases/            # Lógica de negocio pura
│   └── products/
│       ├── api/                  # Llamadas HTTP
│       ├── components/           # Componentes de productos
│       ├── context/              # Context de productos
│       ├── hooks/                # Custom hooks
│       ├── types/                # TypeScript types
│       └── use-cases/            # Lógica de negocio
├── shared/                       # Código compartido
│   └── ui/                       # Componentes UI reutilizables
├── ui/                           # Capa de presentación
│   ├── components/               # Header, Footer
│   ├── layout/                   # Layouts
│   └── pages/                    # Páginas
├── styles/                       # Estilos globales
└── test/                         # Configuración de tests
```

### Patrones Implementados

- ✅ **Feature-Based Architecture** - Organización por características de negocio
- ✅ **Clean Architecture** - Separación en capas (UI, Use Cases, API)
- ✅ **Context API + Reducer Pattern** - Gestión de estado global
- ✅ **Custom Hooks** - Encapsulación de lógica reutilizable
- ✅ **Repository Pattern** - Abstracción de llamadas HTTP
- ✅ **Separation of Concerns** - Responsabilidad única por módulo

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/josesuarez20/prueba-tecnica-utp.git

# Navegar al directorio
cd prueba-tecnica-utp

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Desarrollo - Inicia servidor en http://localhost:5173
npm run dev

# Build - Compila para producción
npm run build

# Preview - Vista previa del build de producción
npm run preview

# Testing - Ejecuta tests en modo watch
npm test

# Testing UI - Abre interfaz visual de Vitest
npm run test:ui

# Coverage - Genera reporte de cobertura
npm run test:coverage

# Lint - Ejecuta ESLint
npm run lint
```

## ✨ Características Implementadas

### ✅ Requisitos Obligatorios

1. **Listado de Productos**
   - ✅ Miniatura, nombre, precio, descripción
   - ✅ Botones "Agregar" y "Vista previa"
   - ✅ Grid responsive (1-4 columnas)
   - ✅ Skeleton loaders durante carga

2. **Restricción de Cantidad**
   - ✅ Máximo 1 unidad por producto
   - ✅ Botón cambia de "Agregar" a "Eliminar"
   - ✅ Validación en el reducer

3. **Vista de Detalles**
   - ✅ Modal con información completa
   - ✅ Fetch independiente por ID del producto
   - ✅ Galería de imágenes
   - ✅ Agregar/eliminar desde el detalle

4. **Badge del Carrito**
   - ✅ Muestra cantidad de productos
   - ✅ Muestra monto total
   - ✅ Actualización en tiempo real

5. **Gestión del Carrito**
   - ✅ Lista de productos agregados
   - ✅ Eliminar producto individual
   - ✅ Vaciar carrito completo
   - ✅ Cálculo automático de totales

### ✨ Características Adicionales

- ✅ **Tests Unitarios** - 5 tests para ProductCard
- ✅ **Confirmaciones** - Diálogos antes de agregar/eliminar
- ✅ **Loaders** - Skeletons animados durante carga
- ✅ **Diseño Moderno** - UI con gradientes y animaciones
- ✅ **Responsive** - Adaptado a móvil, tablet y desktop
- ✅ **TypeScript** - Tipado estricto en todo el proyecto
- ✅ **Path Aliases** - Imports limpios (@/, @features/, etc.)

## 🎨 Mejoras de UI/UX

- 🎨 Header sticky con gradiente azul-índigo
- 🎨 Tarjetas de productos con hover elevado
- 🎨 Imágenes con zoom suave al hover
- �� Badges de descuento con gradiente
- 🎨 Precios con efectos de gradiente en texto
- 🎨 Botones con efectos scale y sombras dinámicas
- 🎨 Modales con backdrop blur
- 🎨 Animaciones pulse en badge del carrito
- 🎨 Fondo con gradiente sutil

## 🧪 Testing

El proyecto incluye tests unitarios configurados con Vitest:

```bash
# Ejecutar tests
npm test

# Ver UI de tests
npm run test:ui

# Generar cobertura
npm run test:coverage
```

**Tests implementados:**
- ✅ Renderizado correcto del ProductCard
- ✅ Visualización de imagen con src correcto
- ✅ Botón "Agregar" cuando no está en carrito
- ✅ Botón "Eliminar" cuando está en carrito
- ✅ Apertura de modal de detalles

## 🌐 API Utilizada

**DummyJSON** - API REST pública
- Endpoint productos: `https://dummyjson.com/products`
- Endpoint producto por ID: `https://dummyjson.com/products/{id}`

## 📊 Estructura de Datos

### ProductItem
```typescript
interface ProductItem {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
    images: string[];
    // ... más propiedades
}
```

### CartItem
```typescript
interface CartItem extends ProductItem {
    quantity: number;  // Siempre 1
}
```

## 🔧 Configuración

### Path Aliases

El proyecto usa path aliases configurados en `tsconfig.app.json` y `vite.config.ts`:

- `@/` → `src/`
- `@app/` → `src/app/`
- `@features/` → `src/features/`
- `@shared/` → `src/shared/`
- `@ui/` → `src/ui/`

### TypeScript

Configuración estricta con:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

## 📝 Documentación Adicional

- 📄 [REQUIREMENTS_CHECKLIST.md](./REQUIREMENTS_CHECKLIST.md) - Checklist completo de cumplimiento
- 📄 [TESTING.md](./TESTING.md) - Guía de testing

## 👨‍💻 Autor

**José Suárez**
- GitHub: [@josesuarez20](https://github.com/josesuarez20)

## 📄 Licencia

Este proyecto fue desarrollado como prueba técnica para UTP.

---

⭐ **Cumplimiento: 100%** - Todos los requisitos obligatorios y opcionales implementados
