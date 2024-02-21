const Menu = () => {
    return (
        <nav class="bg-gray-800 p-4">
            <div class="container mx-auto flex justify-between items-center">
                <a href="./" class="text-white text-lg font-bold">Gama 1</a>

            <div class="space-x-4">
                <a href="./home" class="text-white hover:text-gray-300">Home</a>
                <a href="./acerca" class="text-white hover:text-gray-300">Acerca de</a>
            </div>
            </div>
        </nav>
    )
}

export default Menu