#include<iostream>
using namespace std ;

struct node
{
    int data ;
    struct node * next ;
    struct node * previous ;
};

typedef struct node NODE ;
typedef struct node * PNODE ;

class DoublyCLL
{
    public :
        int iCount ;
        PNODE head ;
        PNODE tail ;

        DoublyCLL() ;
        void InsertFirst(int) ;
        void InserLast(int) ;
        void InsertAtPos(int, int) ;
        void DeleteFirst() ;
        void DeleteLast() ;
        void DeleteAtPos(int) ;
        int Count() ;
        void Display() ;
        void DisplayReverse() ;
};

DoublyCLL::DoublyCLL()
{
    iCount = 0 ;
    head = NULL ;
    tail = NULL ;
}

void DoublyCLL::InsertFirst(int iNo)
{
    PNODE newn = NULL ;
    newn = new NODE ;

    newn->data = iNo ;
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
        newn->previous = tail;

        head = newn ;
    }

    head->previous = tail;
    tail->next = head ;
    iCount++ ;
}

int main()
{
    return 0 ;
}