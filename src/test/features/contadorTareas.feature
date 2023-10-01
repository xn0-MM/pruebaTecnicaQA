@contadorTarea
Feature: Contador de tareas pendientes
    Como usuario
    Quiero poder ver en un contador cuantas tareas tengo pendientes
    Para recordar lo que necesito hacer

  Background: 
    Given que el usuario se encuentra en la página principial de la aplicación

  Scenario Outline: El usuario no tiene tareas completadas
    When introduce las siguientes tareas <tareas>
    Then el contador debería mostrar <numContador> items left

    Examples: 
      | tareas                                                 | numContador |
      | "Ir al super"                                          |           1 |
      | "Comprar pan, Arreglar la bici"                        |           2 |
      | "Comprar Ibuprofeno, Comprar levadura, Ir al gimnasio" |           3 |

  Scenario Outline: El usuario tiene tareas completadas
    And introduce las siguientes tareas <tareas>
    When las tareas <tareasMarcadas> están marcadas como completadas
    Then el contador debería mostrar <numContador> items left

    Examples: 
      | tareas                                                   | tareasMarcadas                       | numContador |
      | "Ir al super"                                            | "Ir al super"                        |           0 |
      | "Comprar pan, Arreglar la bici"                          | "Arreglar la bici"                   |           1 |
      | "Comprar Ibuprofeno, Comprar levadura, Ir al gimnasio"   | "Comprar Ibuprofeno, Ir al gimnasio" |           1 |
      | "Comprar Ibuprofeno, Sacar al perro, Comer más verduras" | "Comprar Ibuprofeno"                 |           2 |
