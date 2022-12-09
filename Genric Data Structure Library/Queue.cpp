#include<iostream>
using namespace std ;

template <class T>
struct node
{
    T data ;
    struct node * next ;
};

template<class T>
class Queue
{
 	public:
		struct node<T> * head ;
		struct node<T> * tail ;
		int iCount ;

		Queue() ;
		void enQueue(int No) ;
		void deQueue() ;
		void Display();
		int Count();
};

template<class T>
Queue<T>::Queue()
{
	head = NULL ;
	tail = NULL ;
	iCount = 0 ;
}

template<class T>
void Queue<T>::enQueue(int No)
{
	struct node<T> * newn = NULL ;
	newn = new node<T> ;

	newn->data = No ;
	newn->next = NULL ;

	if((head == NULL) && (tail == NULL))
	{
		head = newn ;
		tail = newn ;
	}
	else
	{
		newn->next = tail ;
		tail = newn ;
	}

	iCount++;
}

template<class T>
void Queue<T>::deQueue()
{
	if((head == NULL) && (tail == NULL))
	{
		return ;
	}
	else if(iCount == 1)
	{
		delete head;
		head = NULL ;
		tail = NULL ;
	}
	else
	{
		struct node<T> * temp = tail ;
		while(temp->next != head)
		{
			temp = temp->next ;
		}

		head = temp ;
		delete head->next ;
		head->next = NULL;
	}

	iCount--;
}

template<class T>
void Queue<T>::Display()
{
	struct node<T> * temp = tail ;

	while(temp != NULL)
	{
		cout<<"|"<<temp->data<<"|->";
		temp = temp->next ;
	}
	cout<<"NULL"<<endl;
}

template<class T>
int Queue<T>::Count()
{
	return iCount ;
}

int main()
{
	int iRet = 0 ;

	Queue <int>qobj ;
	qobj.enQueue(10);
	qobj.enQueue(20);
	qobj.enQueue(30);
	qobj.enQueue(40);
	qobj.enQueue(50);

	qobj.Display();
	iRet = qobj.Count();
	cout<<"Number of nodes are : "<<iRet<<endl ;

	qobj.deQueue();

	qobj.Display();
	iRet = qobj.Count();
	cout<<"Number of nodes are : "<<iRet<<endl ;

	qobj.deQueue();

	qobj.Display();
	iRet = qobj.Count();
	cout<<"Number of nodes are : "<<iRet<<endl ;

	qobj.deQueue();

	qobj.Display();
	iRet = qobj.Count();
	cout<<"Number of nodes are : "<<iRet<<endl ;

	qobj.deQueue();

	qobj.Display();
	iRet = qobj.Count();
	cout<<"Number of nodes are : "<<iRet<<endl ;

	qobj.deQueue();

	qobj.Display();
	iRet = qobj.Count();
	cout<<"Number of nodes are : "<<iRet<<endl ;
	return 0 ;
}