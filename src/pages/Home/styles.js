import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

    main{
        max-width: 100rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
        margin: auto;
    }
    section{
        position: relative;
        border-top: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
        width: 100%;
        margin-top: 4.8rem;
        padding-bottom: 3rem;
        
        > a{
            text-decoration: none;
            padding: 2rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
            top: -3.2rem;
            right: 0;
            position: absolute;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.TITLE};

            .seta{
                margin-left: 1rem;
                max-width: 2rem;
                max-height: 4.2rem;
                color: ${({ theme }) => theme.COLORS.TITLE};
            }
        }
        svg{
            color: ${({ theme }) => theme.COLORS.PRIMARY};
            max-width: 2rem;
            max-height: 4.2rem;
        }
        > h2{
            padding: 1rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_GRAY};
            position: absolute;
            top: -3rem;
            color: ${({ theme }) => theme.COLORS.TITLE};
            font-size: 2.6rem;
            font-weight: ${({ theme }) => theme.WEIGHT.MEDIUM};
        }
        .skillsSection{
            padding: 2rem 3.2rem;
            
            gap: 2rem;
            justify-content: space-between;
            .skills{
                max-width: 34.9rem;
                height: 20.3rem; 
            }
            .cardSkill{
                flex-direction: column;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 1.6rem;
                display: flex;
            }
            .text{
                > p{
                    text-align: justify;
                    max-width: 50rem;
                    padding: 3rem 0;
                    color: ${({ theme }) => theme.COLORS.FONT};
                    font-size: 1.6rem;
                }
            Button:hover{
                background-color: ${({theme}) => theme.COLORS.HOVER_PRIMARY};
            }
                
            }
        }
    }
    #skill{
        .skillsSection{
            padding: 2rem 3.2rem;
            display: flex;
            gap: 5.9rem;
            flex-wrap: wrap;
            justify-content: space-between;
            .skills{
                display: none;
                margin-top: 3rem;
                margin-left: 5rem;
                max-width: 34.9rem;
                max-height: 20.3rem; 
            }
            .cardSkill{
                margin: auto;
                display: flex;
                justify-content: flex-end;
                flex-wrap: wrap;
                margin-top: 3rem;
            }
            .text{
                > p{
                    text-align: justify;
                    max-width: 50rem;
                    padding: 3rem 0;
                    color: ${({ theme }) => theme.COLORS.FONT};
                    font-size: 1.8rem;
                }
            Button:hover{
                background-color: ${({theme}) => theme.COLORS.HOVER_PRIMARY};
            }
                
            }
        }
    }
    #sobre{
        .skillsSection{
            display: flex;
            flex-direction: column-reverse;
        }
        .text{
            p{
                font-size: 1.8rem;
            }
        }
        Button{
            font-size: 2.5rem;
        }
        #about{
            margin: auto;
        }
         a {
            text-decoration: none;
        }
    }
    #contato{
        .message{
        border: 1px solid ${({theme}) => theme.COLORS.FONT};
        padding: 1.6rem;
        max-width: 34.6rem;
        display: flex;
        flex-direction: column;
        .text{
            > p{
            font-size: 1.8rem;
        }
        }
        

        h1{
            font-size: 1.8rem;
            font-weight: ${({theme}) => theme.WEIGHT.REGULAR};
            color: ${({theme}) => theme.COLORS.TITLE};
        }
        .mail{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            margin-top: 1.6rem;
            p{
                font-size: 1.4rem;
                color: ${({ theme }) => theme.COLORS.FONT};
            }
            svg{
                width: 2.4rem;
                height: 2.4rem;
                fill: ${({ theme }) => theme.COLORS.FONT};
            }
        }                   
    }
    }
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
    section{
        display: flex;
    }
    #projetos{        
        gap: 3rem;
    } 
    #skill{
        .skillsSection{
            flex-wrap: nowrap;
        .skills{  
            display: block ;
            margin-left: 2rem;
        }
        .cardSkill{
            flex-direction: row;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
        .text{
            > p{
                text-align: justify;
                max-width: 50rem;
                padding: 3rem 0;
                color: ${({ theme }) => theme.COLORS.FONT};
                font-size: 1.4rem;
            }
            Button:hover{
                background-color: ${({theme}) => theme.COLORS.HOVER_PRIMARY};
            }   
                
        }
    }
    }
    #sobre{
        .skillsSection{
            display: flex;
            gap: 10rem;
            flex-direction: row;
        }
        .text{
            p{
                font-size: 1.8rem;
            }
        }
        #about {
            /* max-height: 50.8rem;
            max-width: 34.3rem; */
        }
    }    
} 
    
   
`;