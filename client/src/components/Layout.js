import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '3rem 3rem',
    justifyContent: 'center'
}

const HCLayout = ({ children }) => {
    return (
        <Layout>
            <Header>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
                    <Menu.Item key='1'>
                        <NavLink to='/' activeclassname="is-active">Accueil</NavLink>
                    </Menu.Item>
                    <Menu.Item key='2'>
                        <NavLink to='/rooms' activeclassname="is-active">Chambres</NavLink>
                    </Menu.Item>
                    <Menu.Item key='3'>
                        <NavLink to='/about' activeclassname="is-active">A Propos</NavLink>
                    </Menu.Item>
                    <Menu.Item key='4'>
                        <NavLink to='/contact' activeclassname="selected">Contact</NavLink>
                    </Menu.Item>
                </Menu>
            </Header>

            <Content style={contentStyle} children={children} />

            <Footer style={{textAlign: 'center'}}>Hardcoders MERN ©2022 Codé par Cyrielle Gallou</Footer>
        </Layout>
    )
}

export default HCLayout