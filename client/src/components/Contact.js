import React from 'react'
import { Card, Badge } from 'antd'

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <div style={{ width: 300, margin: '1rem' }}>
                <Badge count='Informations' style={{ backgroundColor: 'blue'}}>
                    <Card style={{ minWidth: '18rem'}}>
                        <p><b>Cyrielle Gallou</b></p>
                        <p>16/03/1991 <b>|</b> Permis B <b>|</b> Paris (75)</p>
                        <p>Disponible : immédiatement</p>
                    </Card>
                </Badge>
            </div>

            <div style={{ width: 300, margin: '1rem' }}>
                <Badge count='Coordonnées' style={{ backgroundColor: 'blue'}}>
                    <Card style={{ minWidth: '18rem'}}>
                        <p><b>Téléphone :</b> 06 51 39 70 82</p>
                        <p><b>E-mail :</b> cyrielle.gallou@gmail.com</p>
                    </Card>
                </Badge>
            </div>
        </div>
    )
}

export default Contact