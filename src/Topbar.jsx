const btnList = [
    {
        name:'main',
        displayName:'My Website',
        className:['logo']
    },
    {
        name:'messier',
        displayName:'Messier Search'
    },
    {
        name:'todo',
        displayName:'Todo List'
    }
]

export default function Topbar({ changeSection }) {
  return (
    <div id='topbar'>
        {btnList.map((btn, idx) => {
            return (<button key={idx}
                className={btn.className ? btn.className.join(' ')+' topbarButton': 'topbarButton'}
                onClick={()=>changeSection(btn.name)}>{btn.displayName}</button>
            )
        })}    
    </div>
  )
}