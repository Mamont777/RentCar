import{P as p,u as i,j as e,s as n,a as f,b as j,B as b,T as g}from"./index-2272c566.js";import{u as v,a as m,b as o,c as N,T as w,C,F}from"./CarItem-181706ae.js";import{M as T}from"./MainTitle-6ecb15d8.js";const y="/RentCar/assets/porshe-fd73d8cd.png",x=({open:t})=>{const r=v(),s=i(m),l=i(o),c=N(l,"rentalCompany"),u=a=>{!s||s.rentalCompany!==null?r(n({rentalCompany:a})):s.make===a?r(n({...s,rentalCompany:""})):r(n({...s,rentalCompany:a}))},h=window.innerWidth>=768&&c.length<2||t;return e.jsx("ul",{className:"ml-10 mt-10 flex flex-wrap items-center gap-10",children:c.map((a,d)=>e.jsxs("li",{className:`relative flex items-center justify-center gap-3 ${!h&&d>0?"hidden":""}`,children:[e.jsx("input",{type:"radio",id:a,name:"make",value:a,checked:(s==null?void 0:s.rentalCompany)===a,className:"radio",onChange:()=>u(a)}),e.jsx("label",{htmlFor:a,className:"inline-block pl-[0.15rem] text-main-text hover:cursor-pointer",children:a})]},d))})};x.propTypes={open:p.bool};const k=()=>e.jsxs("section",{className:"no-scrollbar relative flex flex-col items-center justify-start overflow-hidden",children:[e.jsx(T,{className:`responsive-font relative z-[50] mt-0
        flex
        items-start
        justify-center
        bg-gradient-to-r
        from-blue-300
        via-slate-300
        to-stone-500 bg-clip-text text-center text-transparent drop-shadow-[0_1px_3px_rgba(250,250,250,1)] mb-32`,children:"NO FAVORITE CARS AVAILABLE"}),e.jsx(w,{src:y,alt:"car",width:"1200",className:"absolute bottom-0 right-0 z-[60]"})]}),A=()=>{const t=i(o),r=i(m),s=f(t,r);return e.jsxs("div",{className:"flex flex-col items-center justify-center gap-5 pb-4",children:[!s.length&&e.jsx(k,{}),e.jsx("ul",{className:"cards-list",children:s.map(l=>e.jsx(C,{car:l},l.id))})]})},B=()=>{const{isOpen:t,toggle:r}=j(!1),s=i(o);return e.jsxs("aside",{className:"absolute top-0 z-[1] w-full",children:[e.jsxs("div",{className:`${t?"sidebar-open":"sidebar-close"} sidebar relative`,children:[e.jsx(b,{iconURL:"#icon-arrow",type:"button",className:"sidebar-btn",onClick:r,svgClass:`w-3 fill-secondary-text hover:fill-white ${!t&&"-rotate-180 transition duration-200 ease-in-out"} transition duration-200 ease-in-out`}),e.jsx("div",{className:"flex flex-col items-center gap-x-4",children:s.length>0&&e.jsx(g,{className:`gradient mt-[30px] origin-left text-xl font-semibold text-main-text transition duration-200 dark:text-accent-color ${!t&&"hidden"} ${t&&"scale-[1]"}`,children:"Company"})}),e.jsx(x,{open:t}),e.jsx("div",{className:`ml-5 mt-10 ${t?"":"hidden"}`,children:e.jsx(F,{cars:s})})]}),e.jsx(A,{})]})},L=()=>e.jsx("div",{className:"mt-[-3rem] w-full wide:mt-[-8rem]",children:e.jsx("div",{className:"relative mx-auto my-0 w-full",children:e.jsx(B,{})})});export{L as default};
