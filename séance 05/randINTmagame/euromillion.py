import random

numeros = random.sample(range(1, 51), 5)
chance = random.sample(range(1, 12), 2)

print("Numéros :", sorted(numeros))
print("Numéros chance :", sorted(chance))
