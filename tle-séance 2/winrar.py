# THIS IS NOT A WINRAR BOOTLEG
# merci à damien pour le script très bien commenté...


from heapq import *

# for c in 'texte':
#    print(c,ord(c))
# print([(k, chr(k)) for k in range(256)])


def entier_vers_binaire(n):
    s = ""  # chaine vide
    for k in range(8):
        s = str(n % 2) + s  # le nombre decimal soit pair ou impair
        # est converti en chaine '0' ou '1' à chaque ittération
        n = n // 2  # division entiere de n par 2
    return s


# print(entier_vers_binaire(100))


def coder_ascii(u):
    s = ""
    for a in u:
        s = s + entier_vers_binaire(ord(a))
    return s


v = "texte"
# print(coder_ascii(v),len(coder_ascii(v)))

code = {"a": "00", "b": "01", "c": "10", "d": "11"}


def coder(s, code):
    s1 = ""
    for a in s:
        s1 = s1 + code[a]
    return s1


# print(coder ('abcd',code))


def sous_ascii():
    c = {}
    s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 0123456789,;:."
    for a in s:
        c[a] = entier_vers_binaire(ord(a))
    return c


# print(sous_ascii()) # le dictionnaire code ascii:code binaire est crée

# comment decoder dictionnaire inverse


def inverser(code):
    d = {}
    for a in code:
        d[code[a]] = a
    return d


# print(inverser(sous_ascii()))
# inv_mini_ascii = inverser(sous_ascii()) #stocker le dictionnaire inversé dans une variable


def decoder_ascii(s):
    s1 = ""  # declaration d'un chaine vide pour le décodage
    for k in range(len(s) // 8):  # on avance modulo 8
        a = s[8 * k : 8 * (k + 1)]  # on isole chaque paquet de 8bits
        s1 = (
            s1 + inv_mini_ascii[a]
        )  # on ajoute a la chaine le caractére correspondant au code 8 bits
    return s1


inv_mini_ascii = inverser(
    sous_ascii()
)  # stocker le dictionnaire inversé dans une variable
v = coder_ascii("Bonne chance")
print(v)
print(decoder_ascii(v))

code = {"a": 1, "b": "110", "c": "10", "d": "111"}


def est_prefixe(s1, s2):
    n = len(s1)
    return not (n <= len(s2) and s2[:n] == s1)


print(est_prefixe("10", "100"))
print(est_prefixe("11", "110"))


def histogramme(u):
    tf = {}
    for a in u:
        if a in tf:
            tf[a] += 1
        else:
            tf[a] = 1
    return tf


code2 = histogramme("anticonstitutionnelement")
print("code2", code2)

L = []
heappush(L, (10, ["F", "a"]))
heappush(L, (8, ["F", "3"]))
heappush(L, (6, ["F", "20"]))
heappush(L, (5, ["F", "1"]))
heappush(L, (4, ["F", "0"]))
print(L)
for x in range(len(L)):
    print(heappop(L))
