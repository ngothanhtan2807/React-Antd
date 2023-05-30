import { styled } from "styled-components"
import logo from 'Assets/logo.svg'
const LogoStyled = styled.div`

        margin-top: 10px;
        /* width: 100%; */
        height: 60px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        margin-bottom: 10px;
        
    .logo-text{
        color: white;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
    }
    .logo-desc{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 13px;
        color: #7A797D;
    }
`
const Logo = () => {
    return (
        <LogoStyled>
            <span ><img className="logo" src={logo} alt="" /></span>
            <div >
                <div className="logo-text">MyNFT</div>
                <div className="logo-desc">NFT Marketplace</div>
            </div>
        </LogoStyled>
    )
}
export { Logo }