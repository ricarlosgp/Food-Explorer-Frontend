import styled from 'styled-components'

export const ContainerSlider  = styled.section`
  width: 100%;
  
  .carousel-wrapper {
        position: relative;

        .bg-back, .bg-forward {
            display: flex;
            justify-content: center;
            align-items: center;

            position: absolute;
            top: 0;

            width: 80px;
            height: 100%;

            button {
                background: none;
                border: none;

                svg {
                    width: 50px;
                    height: 50px;
                    color: ${({theme})=>theme.COLORS.WHITE_900};
                }
            }
        }

        .bg-back {
            background: linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.472541) 100%);
            left: 0;
        }

        .bg-forward {
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.472541) 0%, #000A0F 100%);
            right: 0;
        }
    }
`
