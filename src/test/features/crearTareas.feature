@crearTarea
Feature: Crear tareas
    Como usuario
    Quiero poder añadir nuevas tareas a mi lista
    Para recordar lo que necesito hacer

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: Añadir varias tareas
    When el usuario crea las siguientes tareas <tareas>
    Then debería ver tareas en la lista con los títulos: <tareasListadas>
    And debería ver <numExpectedTareas> tareas

    Examples: 
      | tareas                                             | tareasListadas                                     | numExpectedTareas |
      | ""                                                 | ""                                                 |                 0 |
      | "Hacer la compra"                                  | "Hacer la compra"                                  |                 1 |
      | "Hacer la compra; Ir al gimnasio"                  | "Hacer la compra; Ir al gimnasio"                  |                 2 |
      | "Comprar entradas; Quedar con Juan; Tocar el bajo" | "Comprar entradas; Quedar con Juan; Tocar el bajo" |                 3 |
