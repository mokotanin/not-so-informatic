alphabet = 'abcdefghijklmnopqrstuvwxyz'

def cesar(message, decalage=3):
    resultat = ''
    for c in message:
        if c in alphabet:
            i = alphabet.find(c)
            resultat += alphabet[(i + decalage) % 26]
        elif c in alphabet.upper():
            i = alphabet.find(c.lower())
            resultat += alphabet[(i + decalage) % 26].upper()
        else:
            resultat += c
    return resultat

def dechiffre_cesar(message, decalage=3):
    return cesar(message, -decalage)

message = input("Message à coder ? ")
code = cesar(message)
print(code)
print(dechiffre_cesar(code))
