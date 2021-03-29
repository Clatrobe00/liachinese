import { Container, Col, Row } from 'react-bootstrap';
import SignUpCard from './SignUpCard';

function Home () {
    return (
        <Container>
            <Row>
                <Col>
                    <SignUpCard />
                </Col>
                <Col>
                    <h3>Meet your new Chinese teacher!</h3>
                    <p>Lia Liu is an experienced Chinese teacher of adult students. Fluent in both English and Chinese, she is a qualified high school Chinese teacher and holds a TC-SOL certificate, an international Chinese teaching qualification awarded by the Confucius Institute.
​ 
                    In the standard Chinese national speaking test Lia scored a very impressive 99.2%! But more importantly she is the most humorous Chinese teacher that you will ever meet. Humor plays a big part in her lessons as you will see from her Tiktok account lialiu_chinese, which has over 66k followers.
​ 
                    Lia has been teaching Chinese for two years, one year in China and one in America. Her students include teachers, lawyers, college students, tech industry employees and more. She has helped her students to pass HSK exams, perfect their Mandarin skills, boost their confidence in communication and become better interpreters between both English and Chinese languages.
                    </p>
                </Col>
            </Row>
        </Container>
        
    )
};

export default Home;