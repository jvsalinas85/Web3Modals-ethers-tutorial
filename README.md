# 🚀 Proyecto Web3 con Web3Modal y Ethers

Este es un proyecto tutorial simple en el que se utiliza **Web3Modal** con **ethers.js** para enviar transacciones en la red **Sepolia**. El frontend está construido con **React** (creado con `npx create-react-app`) y utiliza **Chakra UI** para los componentes. Se agregó el poder firmar mensajes y verificar los mensajes.

## 📌 Tecnologías utilizadas
- ⚛️ **React**
- 🌐 **Ethers.js**
- 🔗 **Web3Modal** (a través de Reown AppKit)
- 🎨 **Chakra UI**

## 📜 Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/jvsalinas85/Web3Modals-ethers-tutorial.git
   cd tu-repositorio
   ```

2. Instala las dependencias necesarias:
   ```bash
   yarn install
   ```

3. Agrega las librerías de Web3Modal y Ethers:
   ```bash
   yarn add @reown/appkit @reown/appkit-adapter-ethers ethers
   ```

4. **Configura el archivo `.env`**
   - Crea una cuenta en [Reown Cloud](https://cloud.reown.com/) y genera un **Project ID**.
   - En la raíz del proyecto, crea un archivo `.env` con el siguiente contenido:
     ```env
     REACT_APP_WEB3MODAL_PROJECTID=tu_project_id
     ```

5. Inicia el servidor de desarrollo:
   ```bash
   yarn start
   ```

## 📄 Documentación
Para más detalles sobre Reown AppKit, consulta la [documentación oficial](https://docs.reown.com/appkit/react/core/installation).

---

# 🚀 Web3 Project with Web3Modal and Ethers

This is a simple tutorial project that uses **Web3Modal** with **ethers.js** to send transactions on the **Sepolia** network. The frontend is built with **React** (created with `npx create-react-app`) and uses **Chakra UI** for components. Now you can sign messages and verify them on the same app.

## 📌 Technologies Used
- ⚛️ **React**
- 🌐 **Ethers.js**
- 🔗 **Web3Modal** (via Reown AppKit)
- 🎨 **Chakra UI**

## 📜 Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/jvsalinas85/Web3Modals-ethers-tutorial.git
   cd your-repository
   ```

2. Install the required dependencies:
   ```bash
   yarn install
   ```

3. Add Web3Modal and Ethers libraries:
   ```bash
   yarn add @reown/appkit @reown/appkit-adapter-ethers ethers
   ```

4. **Set up the `.env` file**
   - Create an account on [Reown Cloud](https://cloud.reown.com/) and generate a **Project ID**.
   - In the project's root directory, create a `.env` file with the following content:
     ```env
     REACT_APP_WEB3MODAL_PROJECTID=your_project_id
     ```

5. Start the development server:
   ```bash
   yarn start
   ```

## 📄 Documentation
For more details on Reown AppKit, check the [official documentation](https://docs.reown.com/appkit/react/core/installation).
