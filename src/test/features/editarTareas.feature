@editarTarea
Feature: Editar tareas
    Como usuario
    Quiero poder editar las tareas
    Para mantener las tareas actualizadas o corregir errores

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario: Editar una tarea existente
    And el usuario crea una tarea con el título "Hacer la compra"
    When el usuario hace doble click en la tarea e introduce un nuevo título
    Then debería ver la tarea en la lista con el título: "Hacer la compra en el Lidl"

  Scenario Outline: Editar una tarea existente con varias tareas ya creadas
    And el usuario crea las siguientes tareas <tareas>
    When el usuario hace doble click en la tarea <tarea> e introduce una nueva tarea <nuevaTarea>
    Then la tarea debería mostrarse con el título actualizado: <nuevaTarea>

    Examples: 
      | tareas                                                     | tarea                            | nuevaTarea                                            |
      | "Hacer la compra"                                          | "Hacer la compra"                | "Arreglar el coche"                                   |
      | "Hacer la compra; Ir al gimnasio"                          | "Hacer la compra"                | "Hacer la compra: Pan, huevos, leche aceite"          |
      | "Comprar entradas Reguera; Quedar con Paco; Tocar el bajo" | "Quedar con Paco"                | "Quedar con Paco a las 9"                             |
      | "Comprar entradas Reguera; Quedar con Paco; Tocar el bajo" | "Quedar con Paco; Tocar el bajo" | "Quedar con Paco a las 9; Tocar el bajo de 5 cuerdas" |
