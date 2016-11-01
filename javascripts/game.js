  
            var se = null,time=20,you=0,arr=new Array('石头','抹布','剪子');
            function p(n){          //讀取用戶要出石頭（p1）還是抹布（p2），還是剪子（p3）
                you = n;
                document.getElementById('you').innerHTML=s(n);
                document.getElementById('st').disabled=true;   //disabled=true的作用是使BUTTON被禁用
                document.getElementById('mb').disabled=true;
                document.getElementById('jz').disabled=true;
                bt();   
            }
            function agin(){    //重新開始遊戲
                document.getElementById('st').disabled=false;
                document.getElementById('mb').disabled=false;
                document.getElementById('jz').disabled=false;       
                document.getElementById('la').style.display = 'none';
                $('you').text('');      
                $('pc').text('');
                $('cu').text('');
                $('you').text('请选择');        
            }
            function bt(){
                var pc = Math.floor(Math.random() * 3 + 1);
                document.getElementById('pc').innerHTML = s(pc);   //讓PC隨機生成石頭剪子抹布中的一個
                var str='';
                if(pc==you){  //判斷輸贏
                    str += '平局';    
                }else{
                    var b = pc-you;
                    if(b>0){
                        if(b==1){
                            str += '电脑赢';   
                        }else{
                            str += '你赢啦';   
                        }               
                    }else{
                        b = b*-1;   
                        if(b==1){
                            str += '你赢啦';   
                        }else{
                            str += '电脑赢';   
                        }   
                    }       
                }
                document.getElementById('la').style.display = 'block';
            
                $('#cu').text(str);
            }
          
            function s(n){
                if(n==1){
                    return '石头';    
                }else if(n==2){
                    return '抹布';    
                }else{
                    return '剪子';    
                }
            }
