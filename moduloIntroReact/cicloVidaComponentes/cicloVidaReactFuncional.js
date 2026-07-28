// Ciclo de Vida en React Funcional
// Documentación oficial: https://react.dev/reference/react/useEffect
 
// El ciclo de vida es lo que le pasa a un componente desde que aparece
// en pantalla hasta que desaparece
// En componentes funcionales se simula con useEffect
 
// -------------------------------------------------------
// LAS TRES ETAPAS
 
// 1) MONTAJE — el componente aparece en pantalla por primera vez
//    Ideal para: cargar datos de una API, suscribirse a eventos
 
// useEffect(() => {
//     console.log('Componente montado');
//     // inicializar estado, suscribirse a eventos, fetch inicial, etc.
// }, []); // [] = solo se ejecuta al montar
 
// 2) ACTUALIZACIÓN — el componente se re-renderiza por cambios en estado o props
//    Ideal para: reaccionar a cambios, hacer nuevas peticiones según el nuevo valor
 
// useEffect(() => {
//     console.log('Componente actualizado');
//     // actualizar DOM, realizar nuevas solicitudes de datos, etc.
// }, [count]); // se ejecuta al montar Y cada vez que "count" cambia
 
// 3) DESMONTAJE — el componente desaparece del DOM
//    Ideal para: cancelar suscripciones, limpiar timers — evita fugas de memoria
 
// useEffect(() => {
//     console.log('Componente montado');
 
//     return () => {
//         console.log('Componente desmontado');
//         // cancelar suscripciones, limpiar recursos, etc.
//     };
// }, []);
 
// -------------------------------------------------------
// RESUMEN DEL ARRAY DE DEPENDENCIAS
 
// useEffect(() => { ... }, [])        → solo al MONTAR
// useEffect(() => { ... }, [valor])   → al montar y cuando "valor" CAMBIA
// useEffect(() => {                   → al MONTAR y al DESMONTAR
//     return () => { ... }
// }, [])
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Suscripción a eventos: suscribirse al montar, cancelar al desmontar
//     -Solicitudes de datos: fetch al montar, nuevo fetch si cambian las dependencias
//     -Manipulación del DOM: agregar/eliminar elementos al montar o actualizar
//     -Integración con bibliotecas externas: inicializar al montar, limpiar al desmontar