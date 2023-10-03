@asignarPrioridad
Feature: Priorizar tareas
    Como usuario
    Quiero poder asignar prioridades a mis tareas
    Para organizar mi trabajo según su importancia

  Background: 
    Given que el usuario se encuentra en la página principal de la aplicación

  Scenario Outline:  Asignar prioridad cuando se crean uno o más elementos elementos
    When el usuario crea las siguientes tareas <tareas>
    Then las tareas <tareas> debería tener una prioridad media por defecto

    Examples: 
      | tareas                          | prioridadPorDefecto |
      | "Ir al super"                  | media               |
      | "Pagar la factura, Ir al cine" | media               |

  Scenario Outline: Cambiar la prioridad de un elemento
    Given el usuario crea las siguientes tareas <tareas>
    When el usuario cambia la prioridad de la tarea <tareasCambiadas> a <nuevaPrioridad>
    Then las tareas <tarea> debería tener una prioridad de <nuevaPrioridad>

    Examples: 
      | tarea                          | tareasCambiadas                | nuevaPrioridad |
      | "Ir al super"                  | "Ir al super"                  | alta           |
      | "Pagar la factura; Ir al cine" | "Pagar la factura"             | baja           |
      | "Pagar la factura; Ir al cine" | "Pagar la factura; Ir al cine" | "baja; alta"   |

  Scenario Outline: Filtrar tareas por prioridad
    Given el usuario crea las siguientes tareas <tareas>
    And el usuario cambia la prioridad de la tarea <tareasCambiadas> a <nuevaPrioridad>
    When el usuario filtra las tareas por prioridad <filtro>
    Then deberían aparecer las tareas <tareasResultantes>
    And debería ver <numTareasResultantes> tareas

    Examples: 
      | tareas                                           | tareasCambiadas                | nuevaPrioridad | filtro | tareasResultantes                                | numTareasResultantes |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Ir al super"                  | alta           | todas  | "Ir al super; Pagar la factura; Hacer ejercicio" |                    3 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Ir al super"                  | alta           | alta   | "Ir al super"                                    |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Pagar la factura"             | baja           | baja   | "Pagar la factura"                               |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Hacer ejercicio; Ir al super" | "baja; alta"   | media  | "Hacer ejercicio"                                |                    1 |
      | "Ir al super; Pagar la factura; Hacer ejercicio" | "Hacer ejercicio; Ir al super" | "baja; baja"   | baja   | "Hacer ejercicio; Ir al super"                   |                    2 |
