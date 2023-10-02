@editarTarea
Feature: Editar tareas
    Como usuario
    Quiero poder editar las tareas
    Para mantener las tareas actualizadas o corregir errores

  Scenario Outline: Editar una o varias tareas
    Given que el usuario se encuentra en la página principial de la aplicación
    And el usuario crea las siguientes tareas <tareas>
    When el usuario hace doble click en la tarea <tarea> e introduce una nueva tarea <nuevaTarea>
    Then la tarea debería mostrarse con el título actualizado: <nuevaTarea>
    And el número de tareas restantes debe ser <numExpectedTareas>

    Examples: 
      | tareas                                                     | tarea                            | nuevaTarea                                   | numExpectedTareas |
      | "Hacer la compra"                                          | "Hacer la compra"                | "Arreglar el coche"                          |                 1 |
      | "Hacer la compra; Ir al gimnasio"                          | "Hacer la compra"                | "Hacer la compra: Pan, huevos, leche aceite" |                 2 |
      | "Comprar entradas Reguera; Quedar con Paco; Tocar el bajo" | "Quedar con Paco; Tocar el bajo" | "Quedar con Paco a las 9; Ir a bolonia"      |                 3 |
      | "Comprar entradas; Quedar con Paco; Tocar el bajo"         | "Quedar con Paco; Tocar el bajo" | "Quedar con Paco a las 9;      "             |                 2 |
