# Juego de piedra, papel o tijera hecho en python!

from random import choice

piedra = 'piedra'
papel = 'papel'
tijera = 'tijera'

jugadas = [piedra, papel, tijera]


def juego(user, cpu):
    if user != cpu:
        if user == piedra:
            res = 'Ganaste!' if cpu == tijera else 'Perdiste!'
        elif user == papel:
            res = 'Ganaste!' if cpu == piedra else 'Perdiste!'
        elif user == tijera:
            res = 'Ganaste!' if cpu == papel else 'Perdiste!'
        else:
            res = 'Please enter a valid option! '
    else:
        res = 'Empate!'
    return res


if __name__ == "__main__":
    user = input('Ingresa su jugada: ')
    cpu = choice(jugadas)
    print(f'La compu jugó {cpu}')
    print(juego(user, cpu))
