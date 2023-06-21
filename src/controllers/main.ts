import { NextFunction, Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.render('main/index');
};

const about = (req: Request, res: Response) => {
  res.render('main/about');
};

const ui = (req: Request, res: Response) => {
  res.render('main/ui');
};
const createCookie = (req:Request, res:Response, next:NextFunction) =>{
  if(!req.cookies ['nomeCookie']){
    res.cookie('nomeCookie', 'valorCookie');
    res.send('Você NUNCA passou por aqui');
  }else{
    res.send('Você JÁ passou por aqui');
  }
}
const cleanCookie = (req:Request, res:Response, next:NextFunction) =>{
  res.clearCookie('nomeCookie');
  res.send('Cookie Apagado!');
}
const login = (req:Request, res:Response) =>{
  if(req.route.methods.get){
    res.render('main/login',{
    csrf: req.csrfToken(),});
  }else{
    const {username, senha} = req.body;
    if(username =='user' && senha =='12345'){
      res.cookie('logado',true);
      res.redirect('/');
    }else{
      res.render('main/login',{
      username,
      senha,
      senhaIncorreta:true,
    });}
  }
}
const logout = (req:Request, res:Response) =>{
  res.clearCookie('logado');
  res.redirect('/');
}

export default { index, about, ui, createCookie,cleanCookie,login,logout };
