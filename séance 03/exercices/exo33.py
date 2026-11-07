note = float(input("Note sur 20 : "))

if note == 0.0:
    print("C'est en dessous de la moyenne")
    print("... lamentable !")
elif note == 20.0:
    print("J'ai la moyenne")
    print("C'est même excellent !")
elif 0.0 < note < 10.0:
    print("C'est en dessous de la moyenne")
elif 10.0 <= note < 20.0:
    print("J'ai la moyenne")
else:
    print("Note invalide !")

print("Fin du programme")
