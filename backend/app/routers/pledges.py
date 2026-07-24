import logging

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import get_db
from app.models.models import PledgeRegistration
from app.schemas.schemas import PledgeCreate, PledgeResponse

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/pledges", tags=["pledges"])

# Note: the website's primary registration path is the external Google Form
# (see VITE_EYE_DONATION_FORM_URL). This endpoint exists so a native in-site
# registration form can be enabled later without backend changes.


@router.post("", response_model=PledgeResponse)
def create_pledge(payload: PledgeCreate, db: Session = Depends(get_db)) -> PledgeResponse:
    pledge = PledgeRegistration(**payload.model_dump())
    db.add(pledge)
    db.commit()
    db.refresh(pledge)
    logger.info("Pledge registration received: id=%s", pledge.id)
    return PledgeResponse(success=True, id=pledge.id)
