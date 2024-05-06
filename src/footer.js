import './footer.css'

function Footer(){
    return(
        <footer className="baixo">
            <img className='logosesi' src={require('./SESI.png')} width={100}/>
            <div className='texto1'>
                <p>&copy; 2024 Todos os direitos reservados. Contato: senai@cabacos.com</p>
            </div>

        </footer>
    )
}

export default Footer