import './footer.css'

const Footer = () => {
    return (<footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href='facebook.com' target="_blank">
                        <img src="/images/fb.png>" alt="" />
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target="_blank">
                        <img src="/images/tw.png>" alt="" />
                    </a>
                </li>
                <li>
                    <a href='twitter.com' target="_blank">
                        <img src="/images/ig.png>" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>
                Developed by Giulia Parca
            </p>
        </section>
    </footer>)
}

export default Footer