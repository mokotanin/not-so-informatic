taille_cm = float(input("Votre taille en cm ? "))
masse = float(input("Votre masse en kg ? "))

taille_m = taille_cm / 100
imc = masse / (taille_m ** 2)

print("IMC =", imc, "kg/m²")

if imc < 16.5:
    interpretation = "dénutrition ou famine"
elif imc < 18.5:
    interpretation = "maigreur"
elif imc < 25:
    interpretation = "corpulence normale"
elif imc < 30:
    interpretation = "surpoids"
elif imc < 35:
    interpretation = "obésité modérée"
elif imc < 40:
    interpretation = "obésité sévère"
else:
    interpretation = "obésité morbide ou massive"

print("Interprétation :", interpretation)
