# Tests Unitarios - Tienda Online

## Instalación de dependencias de testing

Antes de ejecutar los tests, instala las dependencias necesarias:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

## Scripts disponibles

Una vez instaladas las dependencias, agrega estos scripts a tu `package.json`:

```json
"scripts": {
  "test": "vitest",
  "test:ui": "vitest --ui",
  "test:coverage": "vitest --coverage"
}
```

## Ejecutar los tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Ejecutar tests con interfaz gráfica
npm run test:ui

# Ejecutar tests con cobertura
npm run test:coverage
```

## Test implementado

### ProductItem.test.tsx

Este test verifica el componente `ProductCard`:

1. **Renderizado correcto**: Verifica que el título, precio y descripción se muestren correctamente
2. **Imagen del producto**: Verifica que la imagen se renderice con el src correcto
3. **Botón de agregar**: Verifica que el botón de agregar al carrito esté presente
4. **Modal de detalles**: Verifica que el botón de "Ver detalles" funcione

El test usa mocking para simular el hook `useCart` y evitar dependencias externas.

## Estructura de archivos

```
src/
├── test/
│   └── setup.ts          # Configuración global de tests
├── features/
    └── products/
        └── components/
            ├── ProductItem.tsx
            └── ProductItem.test.tsx   # Test del componente
```

## Configuración

- `vitest.config.ts`: Configuración de Vitest con aliases y setup
- `src/test/setup.ts`: Configuración global (cleanup, jest-dom)
