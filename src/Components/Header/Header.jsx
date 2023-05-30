import { styled } from "styled-components"
import search from 'Assets/search (2).svg'
import avt from 'Assets/avt.svg'
import { MailOutlined,NotificationOutlined } from '@ant-design/icons';

const HeaderStyled = styled.div`
    background: #1e4aa1;
    transition: width 0.25s ease;
    color: #6C7383;
    padding-left: 3.5rem;
    padding-right: 2.187rem;
    padding-top: 12px;
    padding-bottom: 12px;
    height: 97px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search{
        position: relative;
    display: flex;
    align-items: center;
    img {
      position: absolute;
      margin-left: 24px;
    }
    }
    .search-input{
        width: 350px;
    height: 50px;
    border-radius: 35px;
    border: none;
    text-indent: 56px;
    font-size: 16px;
    line-height: 21px;
    outline: none;
    }
    .itemHeader{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`
const HeaderStyled1=styled(MailOutlined)`
padding-left: 10px;

   svg{

       width: 30px;
       height: 30px;
       color: white;
    }
`
const HeaderStyled2=styled(NotificationOutlined)`
padding-left: 10px;
padding-right: 10px;
   svg{

       width: 30px;
       height: 30px;
       color: white;
    }
`
const Header = () => {
    return (
        <HeaderStyled className="header">
            <div className="titleHeader">
                <div style={{
                    fontFamily: "Manrope",
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 28 + 'px',
                    lineHeight: 38 + 'px',
                    color: '#8D8D8D',
                    marginBottom: 5 + 'px'
                }}>Good morning, John Doe</div>
                <div style={{
                    fontFamily: "Manrope",
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 15 + 'px',
                    lineHeight: 38 + 'px',
                    color: '#8D8D8D',
                    marginBottom: 10 + 'px'
                }}>Your performance summary this week</div>
            </div>
            <div className="itemHeader">
                <span className="search">
                    <img src={search} alt="" />
                    <input placeholder="Search Item, Collection and Account.."
                        className="search-input" type="text" />
                </span>
                <span style = {{display:'flex',justifyContent:'center', alignItems:'center'}}>
                    <HeaderStyled1/>
                    <HeaderStyled2 />
                    <img src={avt} alt="" />
                </span>

            </div>

        </HeaderStyled>
    )
}
export { Header }