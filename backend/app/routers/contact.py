import logging

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.models import ContactSubmission
from app.schemas.schemas import ContactCreate, ContactResponse

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/contact", tags=["contact"])


@router.post("", response_model=ContactResponse)
def submit_contact(payload: ContactCreate, db: Session = Depends(get_db)) -> ContactResponse:
    submission = ContactSubmission(
        name=payload.name,
        email=payload.email,
        phone=payload.phone,
        subject=payload.subject,
        message=payload.message,
    )
    db.add(submission)
    db.commit()
    db.refresh(submission)
    logger.info("Contact submission received: id=%s subject=%s", submission.id, submission.subject)
    return ContactResponse(success=True, id=submission.id)
