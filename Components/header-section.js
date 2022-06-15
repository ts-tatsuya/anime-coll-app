import { css } from '@emotion/css'
import Link from 'next/link'


function HeaderSection() {
  return (
    <div className={css`
    
        background-color: black;
        height: 30px;
    
    `}>
        <Link href="/">
            <button className={css`
                
                background-color: white;
                height: 30px;

            `}>AniColl</button>
            <button className={css`
                
                background-color: white;
                height: 30px;

            `}>Your Collection</button>
        </Link>
    </div>
  )
}

export default HeaderSection