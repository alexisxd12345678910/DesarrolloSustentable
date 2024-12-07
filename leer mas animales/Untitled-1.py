def main():
    print("Bienvenido a la plataforma")
    print("Seleccione un módulo:")
    print("1. Educación")
    print("2. Salud")
    print("3. Comunidad")
    opcion = input("Ingrese el número de su opción: ")

    if opcion == "1":
        print("\n*** Módulo Educación ***")
        print("Guías y videos interactivos sobre reciclaje y manejo de residuos.")
        print("Gracias por aprender con nosotros.")
    elif opcion == "2":
        print("\n*** Módulo Salud ***")
        print("Información sobre enfermedades relacionadas con la basura.")
        print("Consejos para prevenir riesgos a la salud.")
        print("Gracias por cuidar de tu salud.")
    elif opcion == "3":
        print("\n*** Módulo Comunidad ***")
        print("Seleccione una opción:")
        print("1. Reportar acumulación de basura")
        print("2. Unirse a brigadas de limpieza")
        subopcion = input("Ingrese el número de su opción: ")

        if subopcion == "1":
            ubicacion = input("\nIngrese la ubicación del punto de acumulación de basura: ")
            print(f"Reporte registrado: {ubicacion}. ¡Gracias por tu ayuda!")
        elif subopcion == "2":
            nombre = input("\nIngrese su nombre para unirse a una brigada: ")
            print(f"Gracias {nombre}, se le notificará la fecha de la brigada.")
        else:
            print("Opción no válida.")
    else:
        print("Opción no válida.")

    print("\nFin del programa. ¡Gracias por usar la plataforma!")

# Ejecutar el programa
if _name_ == "_main_":
    main()