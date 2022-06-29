import styled from "styled-components";

export const Container = styled.div`
   width: 100%;

   header {

        h1,
        small,
        .menu-burger-sm,
        .cart {
            color: #fff;
        }

        /* MOBILE */
        .header-sm {
            padding: 12px 12px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            justify-content: space-between;

            .cart-login {
                display: flex;
                align-items: center;
       
             
                .login {
                    display: flex;
                    margin-right: 4px;
                    align-items: center;
                    text-decoration: none;
                    color: #fff;



                    .person-icon {
                        font-size: 1.8rem;
                        
                        color: #fff;
                    }

                    span {
                       display: none;
                    }
                }

                .cart {
                    font-size: 1.5rem;
                    margin-top: 6px;
                }

           }


            .cart-quantity {
                color: #fff;
                font-weight: 400;
                margin-right: 2px;
                color: #fff;
                font-size: 14px;
                position: relative;
                
            }

            h1 {
                font-size: 1.5rem;
                font-weight: 700;
            }

            small {
                font-size: 12px;
                font-weight: 100;
            }

            .menu-burger-sm,
            .cart,
            .search-icon {
                font-size: 1.8rem;
            }
        }
        
        /* DESKTOP */
        .header-md {
            padding: 24px 12px;
            width: 1200px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .cart-quantity {
                color: #fff;
                font-weight: 400;
                margin-right: 2px;
                color: #fff;
                font-size: 16px;
            }

            h1 {
                font-size: 1.8rem;
                font-weight: 700;
            }

            small {
                font-size: 14px;
                font-weight: 100;
            }

            form {
                position: relative;
                .search-icon {
                    font-size: 1.8rem;
                    position: absolute;
                    left: 90px;
                    color: #cecece;
                }
            }

           input {
                border-radius: 4px;
                width: 80%;
                padding: 20px 0 20px 40px;
           }

           .cart-login {
            display: flex;
            align-items: center;
       
             
                .login {
                    display: flex;
                    margin-right: 24px;
                    align-items: center;
                    text-decoration: none;
                    color: #fff;

                    .person-icon {
                        font-size: 1.8rem;
                        margin-right: 4;
                        cursor: pointer;
                    }

                    span {
                        font-size: 1.2rem;
                        margin-left: 4px;
                        cursor: pointer;
                    }
                }

                .cart {
                    font-size: 1.5rem;
                    margin-top: 6px;
                }

           }
        }

        .nav-burger-sm nav {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            list-style: none;
            margin-top: 30px;

            a {
                color: #fff;
                margin: 8px 0;
                font-size: 1.2rem;
            }

            .first-link {
                padding: 8px;
                width: 70px;
            }
        }

        #react-burger-menu-btn {
            width: 30px !important;
            height: 30px!important;
        }

        .bm-overlay {
            top: 70px;
            left: 0;
        }

        .bm-menu {
            height: auto !important;
        }

        nav {
            width: 100%;
            display: flex;
            justify-content: center;

            > ul {
                width: 1200px;
                display: flex;
                justify-content: center;
                list-style: none;
                padding: 8px 0;

                > a {
                    text-decoration: none;
                    
                    > li {
                        font-size: 1.2rem;
                        font-weight: 400;
                        color: #fff;
                        margin: 0 18px;
                        padding: 8px;
                    } 
                }
            }

            .first-link {
                background-color: green;
                border-radius: 4px;
            }
        }
   }

   .content {

        .main-sm {
           max-width: 1200px;
           width: 100%;
           padding: 12px;
           list-style: none;

           > li img {
                width: 100%;
                margin-top: 8px;
           }

           .info-image {
                background-color: green;
                display: flex;
                flex-direction: column;
                padding: 12px;
                align-items: center;
           }

           .info-image h2,
           .info-image span {
                color: #fff;    
           }

           .info-image h2 {
                font-size: 1.2rem;
                font-weight: 400;
           }

           .info-image span {
                font-size: 1.4rem;
                font-weight: bold;
                margin: 18px 0;
           }

           .info-image a {
                padding: 12px;
                border: 0;
                border-radius: 4px;
                background-color: #742904;
                width: 80px;
                color: #fff;
                text-decoration: none;
           }
        }

        .main-md {
            padding: 40px 0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            list-style: none;

            li {
                margin-top: 12px;
                margin-left: 12px;
            }

            > li img {
                width: 250px;
            }

            .info-image {
                background-color: green;
                display: flex;
                flex-direction: column;
                padding: 12px;
           }

           .info-image h2,
           .info-image span {
                color: #fff;    
           }

           .info-image h2 {
                font-size: 1.2rem;
                font-weight: 400;
           }

           .info-image span {
                font-size: 1.4rem;
                font-weight: bold;
                margin: 18px 0;
           }

           .info-image a {
                padding: 12px;
                border: 0;
                border-radius: 4px;
                background-color: #742904;
                width: 80px;
                color: #fff;
                text-decoration: none;
                transition: .5s;

                &:hover {
                    background-color: #5c2002; 
                    transition: .5s;
                }
           }

        }
   }

   footer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h2,
        .icon {
            color: #fff;
        }

        /* MOBILE */
        .footer-sm {
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            padding: 18px 12px;

            input {
                border: 0;
                padding: 12px 0 12px 12px;
            }

            button {
                padding: 12px 12px;
            }

            > .payment ,
            .medias {
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 12px 0;
                
                h2 {
                    font-size: 14px;
                }

                .icon {
                    font-size: 1.6rem;
                    padding: 8px 0;
                }

                svg {
                    margin: 0 8px;
                }
            } 

        }

        /* DESKTOP */
        .footer-md {
            display: flex;
            flex-direction: row;
            width: 1200px;
            justify-content: space-between;
            padding: 24px 12px;

            > .payment ,
            .medias {
                display: flex;
                align-items: center;
                flex-direction: column;
                margin: 12px 0;
                width: 30%;
                
                h2 {
                    font-size: 1.2rem;
                }

                .icon {
                    font-size: 2.2rem;
                    padding: 8px 0;
                }

                svg {
                    margin: 0 8px;
                }
            } 

            form {
                width: 35%;

                input {
                    width: 100%;
                    padding: 18px;
                }

                button {
                    padding: 18px;
                    background-color: #742904;
                    font-size: 1rem;
                    font-weight: 400;
                    color: #fff;
                }
            }
        }
        p {
            border-top: 1PX solid #cecece;
            max-width: 1200px;
            width: 100%;
            padding: 18px 0;
            display: flex;
            justify-content: center;
            color: #cecece;
        }
   }
`
