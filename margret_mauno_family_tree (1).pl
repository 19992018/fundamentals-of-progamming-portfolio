%Current generation
mother(christine, precious).
mother(christine , blessings).
mother(christine, fortune).
mother(christine, dylan).

sibling(X, Y):- 
    mother(christine, X),
    mother(christine, Y).

father(apelle, Y):-
    mother(christine, Y).
    
%One generation up (Dad's side)- 2nd generation
mother(margret_mauno, mjumbe).
mother(margret_mauno , tony).
mother(margret_mauno, apell).
mother(margret_mauno, betty).
mother(margret_mauno, peter).
mother(margret_mauno , amos).
mother(margret_mauno, odhiambo).
mother(margret_mauno, caro).

sibling(X, Y):- 
    mother(margret_mauno, X),
    mother(margret_mauno, Y).
father(vitalis, Y):-
    mother(margret_mauno, Y).

%Two generations up (Dad's side).-3rd generation
mother(petronilla, vitalis).
mother(petronilla, angeline).
mother(petronilla, pascalia).
mother(petronilla, mary).
mother(petronilla, teresia).
mother(petronilla, lucy).

sibling(X, Y):-
    mother(petronilla, X),
    mother(petronilla, Y).

father(alloys, Y):-
    mother(petronilla, Y).

%Three generations up (Dad's side).-4th generation 
mother(ayuma, alloys).
mother(ayuma, dominic).
mother(ayuma, abigael).
mother(ayuma, onoka).
mother(ayuma, omuya).


sibling(X, Y):-
    mother(ayuma, X),
    mother(ayuma, Y).

father(kwengu, Y):-
    mother(ayuma, Y).


%One generation up (Mum's's side).-2nd generation
mother(lydia, christine).
mother(lydia , john).
mother(lydia, susan).
mother(lydia, caro_mum_siz).

sibling(X, Y):- 
    mother(lydia, X),
    mother(lydia, Y).
father(reuben_mahindu,Y):-
    mother(lydia,Y).
    

%Two generations up (Mum's side)-3rd Generation
mother(hellina, florence).
mother(hellina , lydia).
mother(hellina, patrick).
mother(hellina, jeremiah).
mother(hellina, sarah).
mother(hellina , truphena).
mother(hellina, rachel).
mother(hellina, moses).
mother(hellina, mikali).
mother(hellina , jason).
mother(hellina, kepha).
mother(hellina, paul).

sibling(X, Y):- 
    mother(hellina, X),
    mother(hellina, Y).

father(charles, Y):-
    mother(hellina, Y).

%Three generations up (Mum's side)-4th Generation
mother(norah_arekula, charles).
mother(norah_arekula, okira_tom).
mother(norah_arekula, keiye).
mother(norah_arekula, abuyeka).
mother(norah_arekula, ondele).
mother(norah_arekula, tabitha).
mother(norah_arekula, fanice).

sibling(X,Y):-
    mother(norah_arekula, X),
    mother(norah_arekula, Y).
father(jason_atiti,Y):-
	mother(norah_arekula, Y).
    



   

    
    
    
    

	
    





