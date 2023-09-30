@editarTarea
Feature: Editar tareas
    Como usuario
    Quiero poder editar las tareas
    Para mantener las tareas actualizadas o corregir errores

  Scenario: Editar una tarea existente
    Given que el usuario se encuentra en la página principial de la aplicación
    And tiene una tarea en la lista: Hacer la compra
    When el usuario hace doble click en una tarea e introduce un nuevo título: Hacer la compra
    Then la tarea debería mostrarse con el título actualizado: Hacer la compra en el Lidl

  Scenario Outline: Editar una tarea existente con varias tareas ya creadas
    Given que el usuario se encuentra en la página principial de la aplicación
    And tiene varias tareas <tareas>
    When el usuario hace doble click en la tarea <tarea> e introduce una nueva tarea <nuevaTarea>
    Then la tarea debería mostrarse con el título actualizado: <nuevaTarea>

    Examples: 
      | tareas                                                     | tarea             | nuevaTarea                                   |
      | "Hacer la compra"                                          | "Hacer la compra" | "Arreglar el coche"                          |
      | "Hacer la compra, Ir al gimnasio"                          | "Hacer la compra" | "Hacer la compra: Pan, huevos, leche aceite" |
      | "Comprar entradas Reguera, Quedar con Paco, Tocar el bajo" | "Quedar con Paco" | "Quedar con Paco a las 9"                    |
