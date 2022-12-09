#include<iostream>
using namespace std ;

template<class T>
struct node2
{
    T data ;
    struct node2 * next ;
    struct node2 * previous ;
};

template<class T>
class DoublyCLL
{
    public :
        int iCount ;
        struct node2<T> * head ;
        struct node2<T> * tail ;

        DoublyCLL() ;
        void InsertFirst(T) ;
        void InsertLast(T) ;
        void InsertAtPos(T , int) ;
        void DeleteFirst() ;
        void DeleteLast() ;
        void DeleteAtPos(int) ;
        int Count() ;
        void Display() ;
        void DisplayReverse() ;
};

template<class T>
DoublyCLL<T>::DoublyCLL()
{
    iCount = 0 ;
    head = NULL ;
    tail = NULL ;
}

template<class T>
void DoublyCLL<T>::InsertFirst(T No)
{
    struct node2<T> * newn = NULL ;
    newn = new node2<T> ;

    newn->data = No ;
    newn->next = NULL;
    newn->previous = NULL ;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        head->next = tail;
        head->previous = tail;
    }
    else
    {
        newn->next = head;
        head->previous = newn ;
        newn->previous = tail;

        head = newn ;
    }

    head->previous = tail;
    tail->next = head ;
    iCount++ ;
}

template<class T>
void DoublyCLL<T>::InsertLast(T No)
{
    struct node2<T> * newn = NULL ;
    newn = new node2<T> ;

    newn->data = No ;
    newn->next = NULL;
    newn->previous = NULL ;

    if((head == NULL) && (tail == NULL))
    {
        head = newn ;
        tail = newn ;
        head->next = tail;
        head->previous = tail;
    }
    else
    {
        newn->next = head ;
        newn->previous = tail ;

        tail->next = newn ;
        tail = newn ;
    }

    head->previous = tail;
    tail->next = head ;
    iCount++ ;
}

template<class T>
void DoublyCLL<T>::InsertAtPos(T No , int iPos)
{
    if((iPos < 1) || (iPos > iCount+1))
    {
        cout<<"Ivalid Position"<<endl ;
        return ;
    }
    else if(iPos == 1)
    {
        InsertFirst(No) ;
        return ;
    }
    else if(iPos == iCount + 1)
    {
        InsertLast(No);
        return ;
    }
    else
    {
        struct node2<T> * newn = NULL ;
        newn = new node2<T> ;

        struct node2<T> * temp = NULL;
        temp = head;

        newn->data = No ;
        newn->next = NULL ;
        newn->previous = NULL ;

        for(int iCnt = 1 ; iCnt <= iPos-2 ; iCnt++)
        {
            temp = temp->next ;
        }

        newn->next = temp->next ;
        newn->previous = temp ;

        temp->next->previous = newn ;
        temp->next = newn ;

        tail->next = head ;
        head->previous = tail;
        iCount++;
    }
}

template<class T>
void DoublyCLL<T>::DeleteFirst()
{
    if((head == NULL) && (tail == NULL))
    {
        return ;
    }
    else if(iCount == 1)
    {
        delete head ;
        head = NULL ;
        tail = NULL ;
    }
    else
    {
        head = head->next ;
        delete head->previous ;
        head->previous = tail ;
        tail->next = head ;
    }

    iCount--;
}

template<class T>
void DoublyCLL<T>::DeleteLast()
{
    if((head == NULL) && (tail == NULL))
    {
        return ;
    }
    else if(iCount == 1)
    {
        delete head ;
        head = NULL ;
        tail = NULL ;
    }
    else
    {
        tail = tail->previous ;
        delete tail->next ;
        tail->next = head ;
        head->previous = tail ;
    }

    iCount--;
}

template<class T>
void DoublyCLL<T>::DeleteAtPos(int iPos)
{
    if((iPos < 1) || (iPos > iCount))
    {
        cout<<"Ivalid Position"<<endl ;
        return ;
    }
    else if(iPos == 1)
    {
        DeleteFirst() ;
        return ;
    }
    else if(iPos == iCount)
    {
        DeleteLast();
        return ;
    }
    else
    {
        struct node2<T> * temp = NULL;
        temp = head;

        for(int iCnt = 1 ; iCnt <= iPos-2 ; iCnt++)
        {
            temp = temp->next ;
        }

        temp->next = temp->next->next ;
        delete temp->next->previous ;
        temp->next->previous = temp;
       
        tail->next = head ;
        head->previous = tail;
        iCount--;
    }
}

template<class T>
void DoublyCLL<T>::Display()
{
    struct node2<T> * temp = NULL ;
    temp = head ;

    do
    {
        cout<<"|"<<temp->data<<"|<=>" ;
        temp = temp->next ;
    }while(temp != head) ;

    cout<<endl ;
}

template<class T>
void DoublyCLL<T>::DisplayReverse()
{
    struct node2<T> * temp = NULL ;
    temp = tail ;

    do
    {
        cout<<"|"<<temp->data<<"|<=>" ;
        temp = temp->previous ;
    }while(temp != tail) ;

    cout<<endl ;
}

template<class T>
int DoublyCLL<T>::Count()
{
    return iCount;
}

int main()
{
    DoublyCLL <int>dobj ;
    int iRet = 0 ;

    dobj.InsertFirst(21) ;
    dobj.InsertFirst(11) ;

    dobj.InsertLast(51) ;
    dobj.InsertLast(75) ;
    dobj.InsertLast(101) ;

    dobj.InsertAtPos(35 , 3) ;
    dobj.InsertAtPos(82 , 5) ;

    dobj.Display(); 
    dobj.DisplayReverse() ;
    iRet = dobj.Count();
    cout<<"Number of node2s are : "<<iRet<<endl;

    //dobj.DeleteFirst() ;
    //dobj.DeleteLast();

   

    dobj.DeleteAtPos(5);

    dobj.Display(); 
    dobj.DisplayReverse() ;
    iRet = dobj.Count();
    cout<<"Number of node2s are : "<<iRet<<endl;

    return 0 ;
}