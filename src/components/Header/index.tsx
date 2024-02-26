import { Head } from './styles'
import imageLogo from '../../assets/nos-e-amarras.jpg'

function Header() {
    return (
        <Head>
            <h1 id="title-page">Nós e amarras<img width={83} src={imageLogo} /></h1>
        </Head>
    )
}

export default Header;