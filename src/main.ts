export function increment(count: number): number {
  return count + 1;
}

export function decrement(count: number): number {
  return count - 1;
}

// Función para resetear el contador
export function reset(count: number): number {
  return 0;
}

// Función para obtener el count del localStorage (con fallback)
export function getCountFromStorage(): number {
  if (typeof localStorage !== 'undefined') {
    return parseInt(localStorage.getItem('count') || '0');
  }
  return 0;
}

// Función para guardar el count en localStorage
export function saveCountToStorage(count: number): void {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('count', count.toString());
  }
}

// Código del DOM (solo se ejecuta en el navegador)
if (typeof document !== 'undefined') {
  interface CounterState {
    count: number;
  }
  
  let state: CounterState = {
    count: getCountFromStorage()
  };
  
  const updateDisplay = () => {
    const countElement = document.getElementById('count');
    if (countElement) {
      countElement.textContent = state.count.toString();
    }
    saveCountToStorage(state.count);
  };
  
  const incrementButton = document.getElementById('increment');
  if (incrementButton) {
    incrementButton.addEventListener('click', () => {
      state.count = increment(state.count);
      updateDisplay();
    });
  }
  
  const decrementButton = document.getElementById('decrement');
  if (decrementButton) {
    decrementButton.addEventListener('click', () => {
      state.count = decrement(state.count);
      updateDisplay();
    });
  }
  
  const resetButton = document.getElementById('reset');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      state.count = reset(state.count);
      updateDisplay();
    });
  }
  
  // Inicializar al cargar: reflejar valor inicial y persistir
  updateDisplay();
}// CI/CD con Docker y GitHub Actions
