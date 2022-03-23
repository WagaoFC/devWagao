import { FaTools } from 'react-icons/fa'
import { MdEmojiPeople } from 'react-icons/md'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript } from 'react-icons/si'
import { Container } from './styled'

export function Skills() {
    return (
        <Container>
            <button>
                <MdEmojiPeople size={20}/>
                Soft Skills
            </button>
            <button>
                <FaTools size={20}/>
                Hard Skills
            </button>
            <body>
                <div className="container">
                    <div className="card">
                    <div className="face face1">
                        <div className="content">
                        <h2>Lorem Ipsum</h2> 
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div className="face face2">
                        <h2>
                            <SiJavascript color='#f1c40f' />
                        </h2>
                    </div>
                    </div>
                    <div className="card">
                    <div className="face face1">
                        <div className="content">
                        <h2>Lorem Ipsum</h2> 
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div className="face face2">
                        <h2>
                            <IoLogoCss3 color='#3498db' />
                        </h2>
                    </div>
                    </div>
                    <div className="card">
                    <div className="face face1">
                        <div className="content">
                        <h2>Lorem Ipsum</h2> 
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        </div>
                    </div>
                    <div className="face face2">
                        <h2>
                            <AiFillHtml5 color='#d35400' />
                        </h2>
                    </div>
                    </div>
                </div>
            </body>
        </ Container>
    )
}