import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 30px;

    @media (min-width: 800px) {
        padding: 0 70px;
    }
`;

export const SectionSabores = styled.section`

    background: ${({ theme }) => theme.COLORS. BACKGROUND_100};

    margin-top: 165px;

    display: flex;
    justify-content: end;

    width: 100%;
    height: 120px;

    position: relative;

    .wrapper-img {
        position: absolute;
        left: -30px;
        top: -36px;

        width: 200px;

        img {
            width: 100%;
        }
    }
    
    .wrapper-description {
        color: white;
        width: 50%;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        >div {
            width: 180px;

            h1 {
                font-size: 16px;
                line-height: 25px;
                font-weight: 600;
    
                margin-bottom: 4px;
            }
    
            p {
                font-size: 11px;
                line-height: 17px;
                color: ${({ theme }) => theme.COLORS. WHITE_100};
            }
        }

    }

    @media (min-width: 650px) {
        height: 200px;
        margin-top: 200px;

        .wrapper-img {
            left: -40px;
            top: -34px;

            width: 300px;
        }

        .wrapper-description {
            z-index: 1;
            margin-right: 20px;
            
            >div {
                width: 350px;

                h1 {
                    font-size: 35px;
                    margin-bottom: 18px;
                }
    
                p {
                    font-size: 16px;
                }
            }
        }
    }

    @media (min-width: 800px) {
        margin-top: 226px;
        height: 260px;

        .wrapper-img {
            left: -40px;
            top: -91px;

            width: 450px;
        }

        .wrapper-description {
            z-index: 1;
            margin-right: 20px;
            
            >div {
                width: 350px;

                h1 {
                    font-size: 40px;
                    margin-bottom: 18px;
                }
    
                p {
                    font-size: 16px;
                }
            }
        }
    }

    
`;